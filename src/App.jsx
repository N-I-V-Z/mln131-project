import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import MacLeninConcept from './pages/MacLeninConcept';
import PartyRole from './pages/PartyRole';
import Museum from './pages/Museum';
import Quiz from './pages/Quiz';
import Chatbot from './pages/Chatbot';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { ROUTES } from './utils/constants';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.MACLENIN_CONCEPT} element={<MacLeninConcept />} />
          <Route path={ROUTES.PARTY_ROLE} element={<PartyRole />} />
          <Route path={ROUTES.MUSEUM} element={<Museum />} />
          <Route path={ROUTES.QUIZ} element={<Quiz />} />
          <Route path={ROUTES.CHATBOT} element={<Chatbot />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;