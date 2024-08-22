import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import DashboardPage from "./features/dashboard_page/dashboard.jsx";
import PasienPage from "./features/pasien_page/pasien.jsx";
import SkriningPage from "./features/skrining_page/skrining.jsx";
import KlusterPage from "./features/kluster_page/kluster.jsx";
import AddPasienPage from "./features/pasien_page/add_pasien.jsx";
import DetailPasien from "./features/pasien_page/detail_pasien.jsx";
import EditPasien from "./features/pasien_page/edit_pasien.jsx";
import TambahKluster from "./features/kluster_page/add_kluster.jsx";
import EditKluster from "./features/kluster_page/edit_kluster.jsx";


function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<DashboardPage/>}/>
              <Route path="/pasien" element={<PasienPage/>}/>
              <Route path="/pasien/add-pasien" element={<AddPasienPage/>}/>
              <Route path="/pasien/detail/:id" element={<DetailPasien/>} />
              <Route path="/pasien/edit/:id" element={<EditPasien/>} />
              <Route path="/skrining" element={<SkriningPage/>}/>
              <Route path="/kluster" element={<KlusterPage/>}/>
              <Route path="/kluster/add-kluster" element={<TambahKluster/>}/>
              <Route path="/kluster/edit/:id" element={<EditKluster/>}/>

          </Routes>
      </Router>
  )
}

export default App
