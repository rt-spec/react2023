import { createRoot } from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './theme/themeProvider';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <BrowserRouter>
    <ThemeProvider>
        <App/>
    </ThemeProvider>
         
    </BrowserRouter>
);