import { Suspense } from 'react';
import loadable from '@loadable/component';
import AuthLayout from './layouts/AuthLayout';
import BasicLayout from './layouts/BasicLayout';
import { CircularProgress } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = loadable(() => import('./features/Home'));
const Guide = loadable(() => import('./features/Guide'));
const Policy = loadable(() => import('./features/Policy'));
const Payment = loadable(() => import('./features/Payment'));
const SignOut = loadable(() => import('./features/SignOut'));
const NotFound = loadable(() => import('./components/NotFound'));
const Introduction = loadable(() => import('./features/Introduction'));
const OnlineService = loadable(() => import('./features/OnlineService'));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/dang-xuat" element={<SignOut />} />
        </Route>
        <Route path="/" element={<BasicLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<CircularProgress />}>
                <Home title="Trang chủ" />
              </Suspense>
            }
          />
          <Route
            path="/gioi-thieu"
            element={
              <Suspense fallback={<CircularProgress />}>
                <Introduction title="Giới thiệu" />
              </Suspense>
            }
          />
          <Route
            path="/thanh-toan-truc-tuyen"
            element={
              <Suspense fallback={<CircularProgress />}>
                <Payment title="Thanh toán trực tuyến" />
              </Suspense>
            }
          />
          <Route
            path="/dieu-khoan-su-dung"
            element={
              <Suspense fallback={<CircularProgress />}>
                <Policy title="Điều khoản sử dụng" />
              </Suspense>
            }
          />
          <Route
            path="/dich-vu-cong-truc-tuyen"
            element={
              <Suspense fallback={<CircularProgress />}>
                <OnlineService title="Dịch vụ công trực tuyến" />
              </Suspense>
            }
          />
          <Route
            path="/huong-dan-su-dung"
            element={
              <Suspense fallback={<CircularProgress />}>
                <Guide title="Hướng dẫn sử dụng" />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<CircularProgress />}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
