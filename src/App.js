import './App.css';

import BaiTapOanTuXi from './BaiTapRedux/BaiTapOanTuXi/BaiTapOanTuXi';
import BaiTapGameXucXac from './BaiTapRedux/BaiTapGameXucXac/BaiTapGameXucXac';
import BaiTapBookingTicket from './BaiTapRedux/BaiTapBookingTicket/BaiTapBookingTicket';

function App() {
  return (
    <div className="App">
     
      <BaiTapOanTuXi />
      <BaiTapGameXucXac />
      <BaiTapBookingTicket />
    </div>
  );
}

export default App;
