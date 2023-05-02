import {configureStore } from '@reduxjs/toolkit';

import EnglishSlice from './slices/EnglishSlice';
import GermanySlice from './slices/GermanySlice';
import FrenchSlice from './slices/FrenchSlice';
import FrontendSlice from './slices/FrontendSlice';
import IcdlSlice from './slices/IcdlSlice';
import GraphicSlice from './slices/GraphicSlice';
import  RoomOneSlice  from './slices/RoomOneSlice';
import RoomTwoSlice  from './slices/RoomTwoSlice';
import RoomThreeSlice from './slices/RoomThreeSlice';
import RoomFourSlice from './slices/RoomFourSlice';
import RoomFiveSlice from './slices/RoomFiveSlice';
import WaitingSlice from './slices/WaitingSlice';
import RoomSixSlice from './slices/RoomSixSlice';
import RoomSevenSlice from './slices/RoomSevenSlice';
import RoomEightSlice from './slices/RoomEightSlice';
import RoomNineSlice from './slices/RoomNineSlice';
import RoomTenSlice from './slices/RoomTenSlice';
import OutSlice from './slices/OutSlice';


export const store = configureStore({
    reducer : {
     english : EnglishSlice,
     germany : GermanySlice,
     french : FrenchSlice,
     frontend: FrontendSlice,
     icdl : IcdlSlice,
     graphic : GraphicSlice,
     roomOne : RoomOneSlice,
     roomTwo : RoomTwoSlice,
     roomThree : RoomThreeSlice,
     roomFour : RoomFourSlice,
     roomFive : RoomFiveSlice,
     roomSix : RoomSixSlice,
     roomSeven : RoomSevenSlice,
     roomEight : RoomEightSlice,
     roomNine : RoomNineSlice,
     roomTen : RoomTenSlice,
     waiting : WaitingSlice,
     out : OutSlice,
    }
})
