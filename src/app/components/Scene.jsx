import React, { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";

// ---------- Pyramid -----------
function Pyramid({ edgeColor = "gold", scale = 0.8, position = [0, 0, 0] }) {
  const vertices = useMemo(
    () =>
      [
        new THREE.Vector3(0, 1, 0), // Apex
        new THREE.Vector3(-1, -1, 1), // Front Left
        new THREE.Vector3(1, -1, 1), // Front Right
        new THREE.Vector3(1, -1, -1), // Back Right
        new THREE.Vector3(-1, -1, -1), // Back Left
      ].map((v) => v.multiplyScalar(scale)),
    [scale]
  );
  const edges = useMemo(
    () => [
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 1],
    ],
    []
  );
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: edgeColor,
        metalness: 0.5,
        roughness: 0.2,
        emissive: edgeColor,       // add emissive to match vertex style
        emissiveIntensity: 1.0,     // set high intensity for neon effect
      }),
    [edgeColor]
  );
  return (
    <group position={position}>
       {edges.map(([start, end], index) => {
      const curve = new THREE.CatmullRomCurve3([vertices[start], vertices[end]]);
      // Use higher segments and radialSegments for smooth neon tube
      const geo = new THREE.TubeGeometry(curve, 40, 0.04, 8, false); 
      return (
        <mesh key={`pyramid-edge-${index}`} geometry={geo} material={material} />
      );
    })}
      {vertices.map((vertex, index) => (
        <mesh key={`pyramid-vertex-${index}`} position={vertex}>
          <sphereGeometry args={[0.07, 32, 32]} />
          <meshStandardMaterial
            color={edgeColor}
            metalness={0.5}
            roughness={0.2}
            emissive={edgeColor}       // set emissive to the same neon color
            emissiveIntensity={1.0}  
          />
        </mesh>
      ))}
    </group>
  );
}

// ---------- Cube -----------
function Cube({ edgeColor = "gold", size = 1.5, position = [0, 0, 0] }) {
  const half = size / 2;
  const vertices = useMemo(
    () => [
      new THREE.Vector3(-half, -half, -half),
      new THREE.Vector3(half, -half, -half),
      new THREE.Vector3(half, half, -half),
      new THREE.Vector3(-half, half, -half),
      new THREE.Vector3(-half, -half, half),
      new THREE.Vector3(half, -half, half),
      new THREE.Vector3(half, half, half),
      new THREE.Vector3(-half, half, half),
    ],
    [half]
  );
  const edges = useMemo(
    () => [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0], // Bottom face
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 4], // Top face
      [0, 4],
      [1, 5],
      [2, 6],
      [3, 7], // Vertical edges
    ],
    []
  );
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: edgeColor,
        metalness: 0.5,
        roughness: 0.2,
        emissive: edgeColor,       // add emissive to match vertex style
        emissiveIntensity: 1.0,     // set high intensity for neon effect
      }),
    [edgeColor]
  );
  return (
    <group position={position}>
       {edges.map(([start, end], index) => {
      const curve = new THREE.CatmullRomCurve3([vertices[start], vertices[end]]);
      // Use higher segments and radialSegments for smooth neon tube
      const geo = new THREE.TubeGeometry(curve, 40, 0.04, 8, false); 
      return (
        <mesh key={`pyramid-edge-${index}`} geometry={geo} material={material} />
      );
    })}
      {vertices.map((vertex, index) => (
        <mesh key={`cube-vertex-${index}`} position={vertex}>
          <sphereGeometry args={[0.05, 32, 32]} />
          <meshStandardMaterial
            color={edgeColor}
            metalness={0.5}
            roughness={0.2}
            emissive={edgeColor}       // set emissive to the same neon color
             emissiveIntensity={1.0}  
          />
        </mesh>
      ))}
    </group>
  );
}

// ---------- Sphere -----------
function Sphere({ edgeColor = "gold", radius = 1, widthSegments = 12, heightSegments = 12, position = [0, 0, 0] }) {
  const sphereGeom = useMemo(
    () => new THREE.SphereGeometry(radius, widthSegments, heightSegments),
    [radius, widthSegments, heightSegments]
  );
  // Extract vertices from BufferGeometry
  const vertices = useMemo(() => {
    const pos = sphereGeom.attributes.position;
    const verts = [];
    for (let i = 0; i < pos.count; i++) {
      const v = new THREE.Vector3();
      v.fromBufferAttribute(pos, i);
      verts.push(v);
    }
    return verts;
  }, [sphereGeom]);
  const edges = useMemo(() => {
    const e = [];
    for (let i = 0; i < vertices.length; i++) {
      for (let j = i + 1; j < vertices.length; j++) {
        if (vertices[i].distanceTo(vertices[j]) < radius * 0.3) {
          e.push([vertices[i], vertices[j]]);
        }
      }
    }
    return e;
  }, [vertices, radius]);
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: edgeColor,
        metalness: 0.5,
        roughness: 0.2,
        emissive: edgeColor,     // set emissive to the same neon color
        emissiveIntensity: 0.5
      }),
    [edgeColor]
  );
  return (
    <group position={position}>
      <mesh
        geometry={sphereGeom}
        material={
          new THREE.MeshStandardMaterial({
            color: "gray",
            transparent: true,
            opacity: 0.3,
            metalness: 0.3,
            roughness: 0.7,
            emissive: edgeColor,     // set emissive to the same neon color
            emissiveIntensity: 1.0
          })
        }
      />
      {edges.map((edge, index) => {
        const [start, end] = edge;
        const curve = new THREE.CatmullRomCurve3([start, end]);
        const geo = new THREE.TubeGeometry(curve, 40, 0.04, 8, false);
        return (
          <mesh key={`sphere-edge-${index}`} geometry={geo} material={material} />
        );
      })}
      {vertices.map((vertex, index) => (
        <mesh key={`sphere-vertex-${index}`} position={vertex}>
          <sphereGeometry args={[0.04, 32, 32]} />
          <meshStandardMaterial
            color={edgeColor}
            metalness={0.5}
            roughness={0.2}
            emissive={edgeColor}       // set emissive to the same neon color
             emissiveIntensity={1.0}
            
          />
        </mesh>
      ))}
    </group>
  );
}

export default function Scene({ multiplier = 1.5 }) {
  return (
    <div className="w-full h-[300px] z-10 relative">
      <Canvas camera={{ position: [6 * multiplier, 6 * multiplier, 6 * multiplier], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10 * multiplier, 10 * multiplier, 10 * multiplier]} intensity={1} />
        <pointLight position={[-10 * multiplier, -10 * multiplier, -10 * multiplier]} intensity={0.5} />
        <Float speed={1.3} rotationIntensity={0}>
          {/* Pyramid with Neon Pink */}
          <Pyramid
            edgeColor="#FF6EC7"
            scale={0.8 * multiplier} // Adjust scale using multiplier
            position={[-2 * multiplier, 2 * multiplier, 0]} // Adjust position using multiplier
          />
          {/* Cube with Neon Blue */}
          <Cube
            edgeColor="#08F7FE"
            size={1.5 * multiplier} // Adjust size using multiplier
            position={[0, 0, 0]} // Adjust position using multiplier
          />
          {/* Sphere with Neon Green */}
          <Sphere
            edgeColor="#39FF14"
            radius={1 * multiplier} // Adjust radius using multiplier
            position={[2 * multiplier, 1 * multiplier, -0.7* multiplier]} // Adjust position using multiplier
          />
        </Float>
        <OrbitControls enableZoom={false} autoRotate={true} />
      </Canvas>
    </div>
  );
}