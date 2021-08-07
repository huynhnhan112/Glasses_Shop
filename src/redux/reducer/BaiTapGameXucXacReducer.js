

const stateDefault = {
    banChon: true,
    soBanChoi:0,
    soBanThang:0,
    mangXucXac: [
        {hinhAnh:'./img/gameXucXac/1.png',diem:1},
        {hinhAnh:'./img/gameXucXac/1.png',diem:1},
        {hinhAnh:'./img/gameXucXac/1.png',diem:1},
    ]
}

const BaiTapGameXucXacReducer = (state = stateDefault,action) => {
    console.log(action)
    switch(action.type){
       
        case 'DAT_CUOC':{
            state.banChon = action.banChon;
            return {...state}
        }

        case 'PLAY_GAME': {
            let mangXucXacNgauNhien = [];
            for(let i = 0; i < 3; i++){
                let soNgauNhien = Math.floor(Math.random() * 6) + 1;
                let xxnn = {hinhAnh:`./img/gameXucXac/${soNgauNhien}.png`,diem:soNgauNhien};
                mangXucXacNgauNhien.push(xxnn);
            }

            state.mangXucXac = mangXucXacNgauNhien;

            // Xử thắng cuộc

            let tongDiem = mangXucXacNgauNhien.reduce((tong,xxnn,index)=>{
                return tong += xxnn.diem;;
            },0);

            if((state.banChon && tongDiem > 11) || (!state.banChon && tongDiem <= 11)){
                state.soBanThang += 1;
            }

            state.soBanChoi += 1;

            return {...state}
        }

        case 'RESET_GAME': {
            state.banChon = true;
            state.soBanChoi = 0;
            state.soBanThang = 0;
            state.mangXucXac = [
                {hinhAnh:'./img/gameXucXac/1.png',diem:1},
                {hinhAnh:'./img/gameXucXac/1.png',diem:1},
                {hinhAnh:'./img/gameXucXac/1.png',diem:1},
            ]
            return {...state}
            
        }

        
        default: return state;
    }
}


export default BaiTapGameXucXacReducer