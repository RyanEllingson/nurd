import React, { useState } from "react";
import Card from "react-bootstrap/Card";

const NewGroup = () => {
  let [inputGroup, setInputGroup] = useState({
    organizer: "",
    type: "",
    groupTitle: "",
    gameTitle: "",
    description: "",
    location: "",
    requiredGender: "",
    minimumAge: ""
  });
  let [createGroup, setCreateGroup] = useState([]);

  // updates inputGroup state
  function handleChange(event) {
    const { name, value } = event.target;
    setInputGroup(prevInputGroup => {
      return {
        ...prevInputGroup,
        [name]: value
      };
    });
  }

  //add the input data to createGroup array
  function handleSubmit(event) {
    event.preventDefault();
    setCreateGroup(prevCreateGroup => [...prevCreateGroup, inputGroup]);
  }
  // console.log(inputGroup)
  // console.log(createGroup)

  const groups = createGroup.map(group => (
    <div>
      <Card key={group.organizer} style={{ width: "25rem" }}>
        <Card classname="header">{group.groupName}</Card>
        <ul className="list-group" variant="flush">
          <li className="list-group-Item"> {group.groupName}</li>
          <li className="list-group-Item">{group.title}</li>
          <li className="list-group-Item">{group.location}</li>
          <li className="list-group-Item">{group.requiredGender}</li>
          <li className="list-group-Item">{group.minimumAge}</li>
        </ul>
        <button type="submit" className="btn btn-primary">
          Primary
        </button>
      </Card>
    </div>
  ));
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="type of game"
          name="type"
          value={inputGroup.type}
          onChange={handleChange}
        />
        <input
          placeholder="group name"
          name="groupName"
          value={inputGroup.groupName}
          onChange={handleChange}
        />
        <input
          placeholder="game title"
          name="title"
          value={inputGroup.title}
          onChange={handleChange}
        />
        <input
          placeholder="address"
          name="location"
          value={inputGroup.location}
          onChange={handleChange}
        />
        <input
          placeholder="gender"
          name="gender"
          value={inputGroup.gender}
          onChange={handleChange}
        />
        <input
          placeholder="min age requirement"
          name="minAge"
          value={inputGroup.minAge}
          onChange={handleChange}
        />
        <br />
        <br />
        <button>Create Group</button>
      </form>

      {groups}
    </React.Fragment>
  );
};

export default NewGroup;

// import React from "react";

// import CurrentDate from "../../shared/components/Navigation/CurrentDate";
// import { makeStyles } from "@material-ui/core/styles";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Paper from "@material-ui/core/Paper";
// import Stepper from "@material-ui/core/Stepper";
// import Step from "@material-ui/core/Step";
// import StepLabel from "@material-ui/core/StepLabel";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import AddressForm from "./AddressForm";
// import PaymentForm from "./PaymentForm";
// import Review from "./Review";

// const useStyles = makeStyles(theme => ({
//   appBar: {
//     position: "relative"
//   },
//   layout: {
//     width: "auto",
//     marginLeft: theme.spacing(2),
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
//       width: 600,
//       marginLeft: "auto",
//       marginRight: "auto"
//     }
//   },
//   paper: {
//     marginTop: theme.spacing(3),
//     marginBottom: theme.spacing(3),
//     padding: theme.spacing(2),
//     [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
//       marginTop: theme.spacing(6),
//       marginBottom: theme.spacing(6),
//       padding: theme.spacing(3)
//     }
//   },
//   stepper: {
//     padding: theme.spacing(3, 0, 5)
//   },
//   buttons: {
//     display: "flex",
//     justifyContent: "flex-end"
//   },
//   button: {
//     marginTop: theme.spacing(3),
//     marginLeft: theme.spacing(1)
//   }
// }));

// const steps = [
//   "Declare a name for your realm",
//   "Set a location",
//   "Review your new realm"
// ];

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <PaymentForm />;
//     case 1:
//       return <AddressForm />;
//     case 2:
//       return <Review />;
//     default:
//       throw new Error("Unknown step");
//   }
// }
// //github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/checkout/Checkout.js
// export default function NewGroup() {
//   const classes = useStyles();
//   const [activeStep, setActiveStep] = React.useState(0);

//   const handleNext = () => {
//     setActiveStep(activeStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep(activeStep - 1);
//   };

//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <main className={classes.layout}>
//         <Paper className={classes.paper}>
//           <Typography component="h1" variant="h4" align="center">
//             Lay Claim to the Realm
//           </Typography>
//           <Stepper activeStep={activeStep} className={classes.stepper}>
//             {steps.map(label => (
//               <Step key={label}>
//                 <StepLabel>{label}</StepLabel>
//               </Step>
//             ))}
//           </Stepper>
//           <React.Fragment>
//             {activeStep === steps.length ? (
//               <React.Fragment>
//                 <Typography variant="h5" gutterBottom>
//                   Thank you! Welcome to Game Realm!
//                 </Typography>
//               </React.Fragment>
//             ) : (
//               <React.Fragment>
//                 {getStepContent(activeStep)}
//                 <div className={classes.buttons}>
//                   {activeStep !== 0 && (
//                     <Button onClick={handleBack} className={classes.button}>
//                       Back
//                     </Button>
//                   )}
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={handleNext}
//                     className={classes.button}>
//                     {activeStep === steps.length - 1 ? "Place order" : "Next"}
//                   </Button>
//                 </div>
//               </React.Fragment>
//             )}
//           </React.Fragment>
//         </Paper>
//         <CurrentDate />
//       </main>
//     </React.Fragment>
//   );
// }
