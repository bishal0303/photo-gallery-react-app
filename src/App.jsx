import Header from './components/Header';
import PhotoGallery from './components/PhotoGallery';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div className="min-h-screen bg-violet-50 flex flex-col justify-between">
        <div>
          <Header />
          <main>
            <PhotoGallery />
          </main>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default App;
