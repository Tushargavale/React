import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
    useSetRecoilState
  } from 'recoil';

const todoState = atom({
 
    key: 'todoState',
    
    default: [],
  });

  export default todoState