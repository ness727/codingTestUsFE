import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { useLoginStateSync } from './state';
import Landing from './components/landing';
import CodeField from './components/code-field';
import ChallengesPage from './components/ChallengesPage';
import MyPage from './components/mypage';
import Blogs from './components/blogs';
import Login from './components/login';
import LoginCheck from '@/controllers/login-success';
import PrivateRoute from '@/controllers/private-route.tsx';
import RankingPage from './components/ranking';

function App() {
    // 로그인 상태 및 세션 만료 관리 훅 호출
    useLoginStateSync();

    return (
        <RecoilRoot>
            <Router>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/codefield/:id" element={<PrivateRoute><CodeField /></PrivateRoute>} />
                    <Route path="/challenges" element={<ChallengesPage />} />
                    <Route path="/mypage" element={<PrivateRoute><MyPage /></PrivateRoute>} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/login-success" element={<LoginCheck />} />
                    <Route path="/ranking" element={<RankingPage />} />
                    <Route path="/*" element={<Landing />} />
                    
                </Routes>
            </Router>
        </RecoilRoot>
    );
}

export default App;
