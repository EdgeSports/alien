import { Spacer } from "components/util/Spacer";
import { useState } from "react";
import DatePicker from "react-date-picker";
import { MdAdd, MdClose, MdInsertInvitation, MdLastPage } from "react-icons/md";
import { EDGE_BLUE } from "util/Constants";
import { Button } from "components/Buttons";
import { Card } from "components/Cards";
import { PCCPieChart } from "components/pcc/PCCPieChart";

const hour24toHour12 = (hour: number) => {
  if (hour < 0 || hour >= 24) {
    return "Unknown";
  } else if (hour === 0) {
    return "12 AM";
  } else if (hour < 12) {
    return hour + " AM";
  } else if (hour === 12) {
    return hour + " PM";
  } else {
    return hour - 12 + " PM";
  }
};

// enum PCCCategory {
//   PROTEIN,
//   CARB,
//   COLOR,
// }

enum PCCColor {
  GREEN = "#48d948",
  YELLOW = "#f2f54c",
  RED = "#eb4034",
}

type MealPCCType = {
  id: number;
  hour: number;
  proteinPercent: number;
  carbPercent: number;
  colorPercent: number;
  proteinColor?: PCCColor;
  carbColor?: PCCColor;
  colorColor?: PCCColor;
};

const ColoredCirlcle = ({
  color,
  size = 50,
}: {
  color: string;
  size?: number;
}) => (
  <span
    style={{
      height: size,
      width: size,
      backgroundColor: color,
      borderRadius: 50,
      border: "2px solid var(--edgeBackground)",
      display: "inline-block",
      marginLeft: 10,
      marginRight: 10,
    }}
  />
);

const MealPCC = ({
  meal,
  onDelete,
}: {
  meal: MealPCCType;
  onDelete: (id: number) => void;
}) => {
  // const [editable, setEditable] = useState(false);
  const [recording, setRecording] = useState(false);

  // const [pccCategory, setPccCategory] = useState<PCCCategory | null>(null);
  // const [proteinPercent, setProteinPercent] = useState(meal.proteinPercent);
  // const [carbPercent, setCarbPercent] = useState(meal.carbPercent);
  // const [colorPercent, setColorPercent] = useState(meal.colorPercent);
  // const [proteinColor, setProteinColor] = useState(meal.proteinColor);
  // const [carbColor, setCarbColor] = useState(meal.carbColor);
  // const [colorColor, setColorColor] = useState(meal.colorColor);

  return (
    <div style={{ border: "2px solid var(--edgeBlue)" }}>
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          {/* <Pie
            data={{
              labels: ["Protein", "Carbs", "Colors"],
              datasets: [
                {
                  label: "Meal Composition",
                  backgroundColor: ["#404040", "#808080", "#c0c0c0"],
                  hoverBackgroundColor: ["#101010", "#101010", "#101010"],
                  data: [proteinPercent, carbPercent, colorPercent],
                },
              ],
            }}
            options={{ plugins: { legend: { position: "left" } } }}
          /> */}
          <PCCPieChart
            proportions={[
              {
                collapsed: false,
                format: {
                  color: PCCColor.RED,
                  label: "Protein",
                },
                proportion: 2,
              },
              {
                collapsed: false,
                format: {
                  color: PCCColor.GREEN,
                  label: "Carb",
                },
                proportion: 1,
              },
              {
                collapsed: false,
                format: {
                  color: PCCColor.YELLOW,
                  label: "Color",
                },
                proportion: 1,
              },
            ]}
          />
          <div>Adjust chart</div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="row">
            <div className="col-lg-2 offset-lg-10">
              {false /*editable*/ ? (
                <h1>{/*pccCategory*/}</h1>
              ) : (
                <h1>
                  <MdClose
                    onClick={() => onDelete(meal.id)}
                    style={{ cursor: "pointer" }}
                  />
                </h1>
              )}
            </div>
          </div>
          <div>
            {recording ? (
              <Card>
                <h3>You are recording</h3>
              </Card>
            ) : (
              <Card>
                <div>
                  <div>
                    <h3>Recommended distribution</h3>
                  </div>
                  <ColoredCirlcle color={PCCColor.RED} />
                  <ColoredCirlcle color={PCCColor.YELLOW} />
                  <ColoredCirlcle color={PCCColor.GREEN} />
                </div>
              </Card>
            )}
            <Button
              label={recording ? "View Recommended" : "Record"}
              onClick={() => setRecording(!recording)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const NutritionPCC = () => {
  const [date, setDate] = useState(new Date());
  const [meals, setMeals] = useState<Array<MealPCCType>>([
    {
      id: 0,
      hour: 9,
      proteinPercent: 20,
      carbPercent: 30,
      colorPercent: 50,
    },
    {
      id: 1,
      hour: 13,
      proteinPercent: 25,
      carbPercent: 25,
      colorPercent: 50,
    },
    {
      id: 2,
      hour: 18,
      proteinPercent: 30,
      carbPercent: 25,
      colorPercent: 45,
    },
  ]);
  const [focusedMealId, setFocusedMeal] = useState(0);
  const [nextMealId, setNextMealId] = useState(3);

  meals.sort((m1, m2) => m1.hour - m2.hour);
  const focusedMeal = meals.find((meal) => meal.id === focusedMealId);

  const onDelete = (id: number) => {
    const newMeals = meals.filter((meal) => meal.id !== id);
    setMeals(newMeals);
    if (newMeals.length !== 0) {
      setFocusedMeal(newMeals[0].id);
    }
  };

  return (
    <div className="container">
      <Spacer />
      <div className="row justify-content-end">
        <div
          style={{
            padding: "20px",
            backgroundColor: EDGE_BLUE,
            color: "black",
          }}
        >
          <DatePicker
            onChange={(date: Date) =>
              date ? setDate(date) : setDate(new Date())
            }
            value={date}
            maxDate={new Date()}
            showLeadingZeros={true}
            clearIcon={<MdLastPage />}
            calendarIcon={<MdInsertInvitation />}
          />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        {meals.map((meal, i) => (
          <div
            key={i}
            style={{
              width: 60,
              height: 60,
              border: "2px solid var(--edgeBlue)",
              margin: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: meal.id === focusedMealId ? EDGE_BLUE : "",
              color: meal.id === focusedMealId ? "black" : "",
              cursor: "pointer",
            }}
            onClick={() => setFocusedMeal(meal.id)}
          >
            {hour24toHour12(meal.hour)}
          </div>
        ))}
        <div
          style={{
            width: 60,
            height: 60,
            border: "2px solid var(--edgeBlue)",
            margin: 10,
            display: "flex",
            justifyContent: "center",
            backgroundColor: EDGE_BLUE,
            color: "black",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => {
            meals.push({
              id: nextMealId,
              hour: new Date().getHours(),
              proteinPercent: 20,
              carbPercent: 30,
              colorPercent: 50,
            });
            setFocusedMeal(nextMealId);
            setNextMealId(nextMealId + 1);
          }}
        >
          <MdAdd />
        </div>
      </div>
      {focusedMeal === undefined ? (
        <div
          style={{ border: "2px solid var(--edgeBlue)", textAlign: "center" }}
        >
          <h2>You didn't eat anything today?</h2>
        </div>
      ) : (
        <MealPCC meal={focusedMeal} onDelete={onDelete} key={focusedMeal.id} />
      )}

      <Spacer />
    </div>
  );
};

export const Nutrition = () => <NutritionPCC />;
