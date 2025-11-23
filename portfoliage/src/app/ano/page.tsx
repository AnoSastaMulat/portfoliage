"use client"
import { JSX } from "react";
import React from "react";
import { useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import { Canvas, createPortal, useFrame, useThree } from "@react-three/fiber";
import ThreeScene from "@/components/ThreeScene";
import { useFBO, useGLTF, useScroll, Text, Image, Scroll, Preload, ScrollControls, MeshTransmissionMaterial, Svg } from '@react-three/drei'
import { easing } from 'maath'


export default function AnoPage() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 50], fov: 25 }}>
        <ScrollControls damping={0.2} pages={2} distance={0.5}>
          <Lens>
            <Scroll>
              <Images />
            </Scroll>
          </Lens>
        </ScrollControls>
      </Canvas>
    </div>
  );
}

function Lens({ children, damping = 0.1, ...props }: { children: React.ReactNode; damping?: number } & JSX.IntrinsicElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null!)
  const { nodes } = useGLTF('/assets/ano/playground/lens-transformed.glb')
  const buffer = useFBO()
  const viewport = useThree((state) => state.viewport)
  const [scene] = useState(() => new THREE.Scene())
  useFrame((state, delta) => {
    // Tie lens to the pointer
    // getCurrentViewport gives us the width & height that would fill the screen in threejs units
    // By giving it a target coordinate we can offset these bounds, for instance width/height for a plane that
    // sits 15 units from 0/0/0 towards the camera (which is where the lens is)
    const viewport = state.viewport.getCurrentViewport(state.camera, [0, 0, 15])
    easing.damp3(
      ref.current.position,
      [(state.pointer.x * viewport.width) / 2, (state.pointer.y * viewport.height) / 2, 15],
      damping,
      delta
    )
    // This is entirely optional but spares us one extra render of the scene
    // The createPortal below will mount the children of <Lens> into the new THREE.Scene above
    // The following code will render that scene into a buffer, whose texture will then be fed into
    // a plane spanning the full screen and the lens transmission material
    state.gl.setRenderTarget(buffer)
    state.gl.setClearColor('#d8d7d7')
    state.gl.render(scene, state.camera)
    state.gl.setRenderTarget(null)
  })
  return (
    <>
      {createPortal(children, scene)}
      <mesh scale={[viewport.width, viewport.height, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} />
      </mesh>
      {/* @ts-ignore */}
      <mesh scale={2} ref={ref} rotation-x={Math.PI / 2} geometry={nodes.Cylinder.geometry} {...props}>
      {/* geometry={new THREE.SphereGeometry} */}
        <MeshTransmissionMaterial buffer={buffer.texture} ior={1.2} thickness={1.5} anisotropy={0.2} chromaticAberration={0.04} />
      </mesh>
    </>
  )
}

function Images() {
  const group = useRef<THREE.Group>(null!)
  const data = useScroll()
  const { width, height } = useThree((state) => state.viewport)
  return (
    <group ref={group}>
      <Svg position={[-15, 0, 0]} scale={0.01} src="/assets/ano/playground/my-drawing.svg" />
    </group>
  )
}