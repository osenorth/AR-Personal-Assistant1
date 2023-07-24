/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 public/SpotifyHipHopDance2M.glb
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect } from "react";


export function HipHopDance2M(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/SpotifyHipHopDance2M.glb')
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play();
  }, []) 
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="tshirt001" geometry={nodes.tshirt001.geometry} material={materials.tshirt} skeleton={nodes.tshirt001.skeleton} />
          <skinnedMesh name="tshirt057" geometry={nodes.tshirt057.geometry} material={materials['Hair Black.001']} skeleton={nodes.tshirt057.skeleton} />
          <skinnedMesh name="tshirt058" geometry={nodes.tshirt058.geometry} material={materials['Hair Black.001']} skeleton={nodes.tshirt058.skeleton} />
          <skinnedMesh name="tshirt059" geometry={nodes.tshirt059.geometry} material={materials['Hair Black.001']} skeleton={nodes.tshirt059.skeleton} />
          <skinnedMesh name="tshirt060" geometry={nodes.tshirt060.geometry} material={materials['Hair Black.001']} skeleton={nodes.tshirt060.skeleton} />
          <skinnedMesh name="tshirt061" geometry={nodes.tshirt061.geometry} material={materials['Hair Black.001']} skeleton={nodes.tshirt061.skeleton} />
          <group name="tshirt063">
            <skinnedMesh name="tshirt001mesh008" geometry={nodes.tshirt001mesh008.geometry} material={materials['Eye.001']} skeleton={nodes.tshirt001mesh008.skeleton} />
            <skinnedMesh name="tshirt001mesh008_1" geometry={nodes.tshirt001mesh008_1.geometry} material={materials['eye black.001']} skeleton={nodes.tshirt001mesh008_1.skeleton} />
            <skinnedMesh name="tshirt001mesh008_2" geometry={nodes.tshirt001mesh008_2.geometry} material={materials['eye pinnk.001']} skeleton={nodes.tshirt001mesh008_2.skeleton} />
          </group>
          <skinnedMesh name="tshirt064" geometry={nodes.tshirt064.geometry} material={materials.face} skeleton={nodes.tshirt064.skeleton} />
          <skinnedMesh name="tshirt065" geometry={nodes.tshirt065.geometry} material={materials.hands} skeleton={nodes.tshirt065.skeleton} />
          <skinnedMesh name="tshirt067" geometry={nodes.tshirt067.geometry} material={materials['Foot.002']} skeleton={nodes.tshirt067.skeleton} />
          <skinnedMesh name="tshirt069" geometry={nodes.tshirt069.geometry} material={nodes.tshirt069.material} skeleton={nodes.tshirt069.skeleton} />
          <skinnedMesh name="tshirt070" geometry={nodes.tshirt070.geometry} material={nodes.tshirt070.material} skeleton={nodes.tshirt070.skeleton} />
          <skinnedMesh name="tshirt071" geometry={nodes.tshirt071.geometry} material={materials.Material} skeleton={nodes.tshirt071.skeleton} />
          <skinnedMesh name="tshirt074" geometry={nodes.tshirt074.geometry} material={materials['Shoes feet']} skeleton={nodes.tshirt074.skeleton} />
          <skinnedMesh name="tshirt075" geometry={nodes.tshirt075.geometry} material={nodes.tshirt075.material} skeleton={nodes.tshirt075.skeleton} />
          <skinnedMesh name="tshirt076" geometry={nodes.tshirt076.geometry} material={materials.Shoes} skeleton={nodes.tshirt076.skeleton} />
          <skinnedMesh name="tshirt078" geometry={nodes.tshirt078.geometry} material={nodes.tshirt078.material} skeleton={nodes.tshirt078.skeleton} />
          <skinnedMesh name="tshirt079" geometry={nodes.tshirt079.geometry} material={materials['Shoes feet']} skeleton={nodes.tshirt079.skeleton} />
          <skinnedMesh name="tshirt080" geometry={nodes.tshirt080.geometry} material={nodes.tshirt080.material} skeleton={nodes.tshirt080.skeleton} />
          <skinnedMesh name="tshirt082" geometry={nodes.tshirt082.geometry} material={nodes.tshirt082.material} skeleton={nodes.tshirt082.skeleton} />
          <skinnedMesh name="tshirt083" geometry={nodes.tshirt083.geometry} material={materials['ShoeLace left']} skeleton={nodes.tshirt083.skeleton} />
          <skinnedMesh name="tshirt084" geometry={nodes.tshirt084.geometry} material={materials['shirt black']} skeleton={nodes.tshirt084.skeleton} />
          <skinnedMesh name="tshirt086" geometry={nodes.tshirt086.geometry} material={materials['Hair Black.001']} skeleton={nodes.tshirt086.skeleton} />
          <skinnedMesh name="tshirt087" geometry={nodes.tshirt087.geometry} material={materials['Hair Black.001']} skeleton={nodes.tshirt087.skeleton} />
          <skinnedMesh name="tshirt088" geometry={nodes.tshirt088.geometry} material={nodes.tshirt088.material} skeleton={nodes.tshirt088.skeleton} />
          <skinnedMesh name="tshirt089" geometry={nodes.tshirt089.geometry} material={nodes.tshirt089.material} skeleton={nodes.tshirt089.skeleton} />
          <skinnedMesh name="tshirt091" geometry={nodes.tshirt091.geometry} material={nodes.tshirt091.material} skeleton={nodes.tshirt091.skeleton} />
          <skinnedMesh name="tshirt092" geometry={nodes.tshirt092.geometry} material={nodes.tshirt092.material} skeleton={nodes.tshirt092.skeleton} />
          <skinnedMesh name="tshirt094" geometry={nodes.tshirt094.geometry} material={nodes.tshirt094.material} skeleton={nodes.tshirt094.skeleton} />
          <skinnedMesh name="tshirt095" geometry={nodes.tshirt095.geometry} material={nodes.tshirt095.material} skeleton={nodes.tshirt095.skeleton} />
          <skinnedMesh name="tshirt097" geometry={nodes.tshirt097.geometry} material={nodes.tshirt097.material} skeleton={nodes.tshirt097.skeleton} />
          <skinnedMesh name="tshirt098" geometry={nodes.tshirt098.geometry} material={nodes.tshirt098.material} skeleton={nodes.tshirt098.skeleton} />
          <skinnedMesh name="tshirt100" geometry={nodes.tshirt100.geometry} material={nodes.tshirt100.material} skeleton={nodes.tshirt100.skeleton} />
          <skinnedMesh name="tshirt101" geometry={nodes.tshirt101.geometry} material={nodes.tshirt101.material} skeleton={nodes.tshirt101.skeleton} />
          <skinnedMesh name="tshirt103" geometry={nodes.tshirt103.geometry} material={nodes.tshirt103.material} skeleton={nodes.tshirt103.skeleton} />
          <skinnedMesh name="tshirt104" geometry={nodes.tshirt104.geometry} material={nodes.tshirt104.material} skeleton={nodes.tshirt104.skeleton} />
          <skinnedMesh name="tshirt106" geometry={nodes.tshirt106.geometry} material={nodes.tshirt106.material} skeleton={nodes.tshirt106.skeleton} />
          <skinnedMesh name="tshirt107" geometry={nodes.tshirt107.geometry} material={nodes.tshirt107.material} skeleton={nodes.tshirt107.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/SpotifyHipHopDance2M.glb')