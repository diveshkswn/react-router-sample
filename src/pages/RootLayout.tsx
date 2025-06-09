import { Outlet, useNavigation } from 'react-router';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { GlobalSpinner } from '../Components/Spinner/Spinner';

export const RootLayout: React.FC<{}> = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div className="RootLayout">
      <Header />
      {isNavigating && <GlobalSpinner />}
      <div className="main-content">
        <h3>RootLayout</h3>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};
