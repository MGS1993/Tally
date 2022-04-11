// import { StyledScheduleMenu, Header } from "./styles/ScheduleMenu.styled";
// import { useForm } from "react-hook-form";
// import { StyledForm, FormItem, StyledInput } from "./styles/Menu.styled";
// import { FormSubmitBtn } from "./styles/Button.styled";

// import { scheduleExpense } from "../util/addExpense";

// const ScheduleMenu = ({ schedulerToggle, currentUser }) => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     getValues,
//     formState: { errors },
//   } = useForm();

//   return (
//     <StyledScheduleMenu toggle={schedulerToggle}>
//       <Header>Schedule Payments</Header>
//       <StyledForm
//         onSubmit={handleSubmit((data) =>
//           scheduleExpense(data, currentUser._id)
//         )}
//       >
//         <FormItem>
//           <StyledInput
//             type="text"
//             name="name"
//             placeholder="Expense Name"
//             {...register("name")}
//           />
//         </FormItem>
//         <FormItem>
//           <StyledInput
//             type="number"
//             name="cost"
//             placeholder="Expense Cost"
//             {...register("cost")}
//           />
//         </FormItem>
//         <FormItem>
//           <Header size="26px">Charge Date</Header>
//           <StyledInput
//             type="date"
//             name="date"
//             placeholder="Charge Date"
//             {...register("date")}
//           />
//         </FormItem>
//         <FormSubmitBtn variant="contained" type="submit">
//           Schedule Expense
//         </FormSubmitBtn>
//       </StyledForm>
//     </StyledScheduleMenu>
//   );
// };

// export default ScheduleMenu;
