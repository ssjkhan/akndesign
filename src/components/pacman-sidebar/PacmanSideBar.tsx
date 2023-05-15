import Node from "@components/pacman-sidebar/Node";
import Pacman from "@components/pacman-sidebar/Pacman";

export default function PacmanSidebar() {
  return (
    <div className="fixed right-2">
      <Pacman />
      <Node />
      <Node />
      <Node />
      <Node />
    </div>
  );
}
