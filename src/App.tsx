import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ReactQueryDevtools } from "react-query/devtools";
import Router from "./router/Router";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={lightTheme}>
        {/* RESET CSS 컴포넌트 */}
        <GlobalStyle />
        {/* 라우터 관리 */}
        <Router />
        {/* react-query 브라우저 디버깅 */}
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
