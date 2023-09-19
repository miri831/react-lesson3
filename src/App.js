import "./styles.css";
import { Gallery } from "./components/gallery/gallery";
import { photos } from "./components/gallery/photoData";

export default function App() {
  return (
    <div className="App">
      <Gallery photos={photos} />
    </div>
  );
}
