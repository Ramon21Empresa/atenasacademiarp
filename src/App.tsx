/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Feedbacks from './pages/Feedbacks';
import Personal from './pages/Personal';
import UnitDetail from './pages/UnitDetail';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feedbacks" element={<Feedbacks />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/unidade/:id" element={<UnitDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}
