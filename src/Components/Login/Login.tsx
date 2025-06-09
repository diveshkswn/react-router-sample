import { useRef, useState } from 'react';
import './Login.css';
import { loginWithUser } from '../../helper';
import { useNavigate } from 'react-router';
export const Login: React.FC<{}> = () => {
  const navigate = useNavigate();
  const formValuesRef = useRef<HTMLInputElement[]>([]);
  const [isLoading, setLoading] = useState(false);
  const handleFormSubmit = async () => {
    console.log(
      'formValuesRef',
      formValuesRef.current[0].value,
      formValuesRef.current[1].value
    );
    const userName = formValuesRef.current[0].value;
    const pass = formValuesRef.current[1].value;
    if (userName && pass) {
      setLoading(true);
      await loginWithUser(userName, pass);
      setLoading(false);
      formValuesRef.current[0].value = '';
      formValuesRef.current[1].value = '';
      navigate('/');
    }
  };

  return (
    <div className="Login-Form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFormSubmit();
        }}
      >
        <div className="field">
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            name="userName"
            id="userName"
            ref={(element) => {
              if (element) formValuesRef.current[0] = element;
            }}
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            ref={(element) => {
              if (element) formValuesRef.current[1] = element;
            }}
          />
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Login'}
        </button>
      </form>
    </div>
  );
};
