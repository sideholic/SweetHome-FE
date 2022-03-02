import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme/theme";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isDarkAtom } from "./atom/atom";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ReactQueryDevtools } from "react-query/devtools";
import Router from "./router/Router";

function App() {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);

  useEffect(() => {
    const localStDark = window.localStorage.getItem("isDark");
    if (localStDark === "true") {
      setIsDark(Boolean(localStDark));
    }
  }, []);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
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
