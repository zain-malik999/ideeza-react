import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { Label } from "atoms";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    // flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

function Collapse(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const { collapseData } = props;
  return (
    <div className={`${classes.root} space-y-4 pt-10`}>
      {collapseData?.map((v, k) => {
        return (
          <Accordion
            expanded={expanded === `${v.id}`}
            onChange={handleChange(`${v.id}`)}
          >
            <AccordionSummary
              expandIcon={
                <>
                  {expanded === false ? (
                    <span className="text-gray-300 text-base">+</span>
                  ) : (
                    <>-</>
                  )}
                </>
              }
            >
              <Label
                value={
                  <>
                    {k + 1}. {v.name}
                  </>
                }
                className="text-gray-300 font-sans"
              />
            </AccordionSummary>

            <AccordionDetails>
              <Label
                className="p-2 tracking-tight font-sans text-gray-300 text-sm leading-7"
                value={v.detail}
              />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
export default Collapse;
