import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ApplicantState } from "./applicant.model";
/* 
const count = useSelector((state: RootState) => state.counter.value)
const dispatch = useDispatch()
onClick={() => dispatch(increment())}
*/
const initialState: ApplicantState = {
   termsAccepted: false,
   datepickerDays: [],
   scheduler: {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
   },
   bankAccount: {
      sheba: "",
      info: "",
   },
   dayPart: "am",
   shiftHours: "",
   forceUpdate: false,
   defaultValue: null,
};

export const applicantSlice = createSlice({
   name: "applicant",
   initialState,
   reducers: {
      acceptingTerms: (state, action: PayloadAction<boolean>) => {
         state.termsAccepted = action.payload;
      },
   },
});

// Action creators are generated for each case reducer function
export const { acceptingTerms } = applicantSlice.actions;
export const applicantState = (state: RootState) => state.applicant;
export default applicantSlice.reducer;
