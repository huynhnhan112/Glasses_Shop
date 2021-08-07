


const stateDefault = {
    mangDatCuoc: [
        {ma:'keo',hinhAnh:'./img/gameOanTuXi/keo.png',datCuoc:true},
        {ma:'bua',hinhAnh:'./img/gameOanTuXi/bua.png',datCuoc:false},
        {ma:'bao',hinhAnh:'./img/gameOanTuXi/bao.png',datCuoc:false},
    ],
    ketQua: "I'm iron man, i love you 3000 !!!",
    soBanThang:0,
    soBanChoi:0,
    computer:{ma:'keo',hinhAnh:'./img/gameOanTuXi/keo.png'}
}


const BaiTapOanTuXiReducer = (state = stateDefault,action) => {
    switch(action.type){

        case 'CHON_KEO_BUA_BAO': {

            // Reset lại mảng
            let mangDatCuocUpdate = [...state.mangDatCuoc];
            // Tạo ra mảng cược mới từ mảng cược cũ và action.maCuoc do user truyền lên
            mangDatCuocUpdate = mangDatCuocUpdate.map((item,index)=>{
                if(item.ma === action.maCuoc){
                    return {...item, datCuoc: true}
                }
                return {...item, datCuoc: false}
            })
            // setState của mảng cược => Render lại giao diện
            state.mangDatCuoc = mangDatCuocUpdate;
            return {...state}
        }

        case 'RANDOM': {
           
            let soNgauNhien = Math.floor(Math.random() *3);
            let hinhAnhNgauNhien = state.mangDatCuoc[soNgauNhien];
            state.computer = hinhAnhNgauNhien;
            return {...state}
        }

        case 'END_GAME': {

            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let computer = state.computer;

            switch (player.ma) {
                case 'keo':
                    if(computer.ma === 'keo'){
                        state.ketQua = 'Hòa rồi, cố gắng hơn nữa nào !!!';
                    }else if(computer.ma === 'bua'){
                        state.ketQua = 'Tiếc quá, bạn đã thua rồi !!!';
                    }else{
                        state.soBanThang += 1;
                        state.ketQua = 'Chúc mừng, bạn đã chiến thắng !!!';
                    }
                    break;
                case 'bua':
                    if(computer.ma === 'keo'){
                        state.soBanThang += 1;
                        state.ketQua = 'Chúc mừng, bạn đã chiến thắng !!!';
                    }else if(computer.ma === 'bua'){
                        state.ketQua = 'Hòa rồi, cố gắng hơn nữa nào !!!';
                    }else{
                        state.ketQua = 'Tiếc quá, bạn đã thua rồi !!!';
                    }
                    break;
                case 'bao':
                    if(computer.ma === 'keo'){
                        state.ketQua = 'Tiếc quá, bạn đã thua rồi !!!';
                    }else if(computer.ma === 'bua'){
                        state.soBanThang += 1;
                        state.ketQua = 'Chúc mừng, bạn đã chiến thắng !!!';
                    }else{
                        state.ketQua = 'Hòa rồi, cố gắng hơn nữa nào !!!';
                    }
                    break;
                default: state.ketQua = 'Chúc mừng, bạn đã chiến thắng !!!';
                state.soBanThang += 1;
                break;
            }

            state.soBanChoi += 1;
            return {...state}
        }

    default: return {...state}

    }
}


export default BaiTapOanTuXiReducer;