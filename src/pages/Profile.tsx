import { SoftDivider } from "components/Barriers";
import { Spacer } from "components/util/Spacer";
import { DataSupplier } from "api/ApiUtil";
import { EDGE_BLUE } from "util/Constants";
import {
  EditableImageField,
  EditableTextField,
} from "components/form/EditableField";

type TeamData = {
  name: string;
  position: string;
  sport: string;
};

type ProfileDataType = {
  name: string;
  type: string;
  pic: string;
  bio: string;
  teams: Array<TeamData>;
};

type AthleteDataType = ProfileDataType & {
  status: string;
  height: number;
  weight: number;
};

type UserDataType = ProfileDataType | AthleteDataType;

const ProfilePicture = ({ pic }: { pic: string }) => (
  <div className="row d-flex justify-content-center">
    <div className="col-4  d-flex justify-content-center">
      <EditableImageField
        url={`API_HERE`}
        formKey="profile-picture"
        initialImageUrl={pic}
        alt="Profile picture"
        style={{
          background: "#D198F9",
          border: "2px solid black",
          borderRadius: "50%",
        }}
      />
    </div>
  </div>
);

const Title = ({
  name,
  type,
  teams,
}: {
  name: string;
  type: string;
  teams: Array<TeamData>;
}) => (
  <>
    <div className="row d-flex justify-content-center">
      <div className="col-8 d-flex justify-content-center">
        <h1>{name}</h1>
      </div>
    </div>
    <div className="row d-flex justify-content-center">
      <div className="col-8 d-flex justify-content-center">
        <h3>
          <code>{type}</code>
        </h3>
      </div>
    </div>
    {teams ? (
      teams.map((team, i) => (
        <div className="row d-flex justify-content-center" key={i}>
          <div className="col-8 d-flex justify-content-center">
            <h2>{team.sport + " | " + team.position + " | " + team.name}</h2>
          </div>
        </div>
      ))
    ) : (
      <div className="row d-flex justify-content-center">
        <div className="col-8 d-flex justify-content-center">
          <span>{"No Teams"}</span>
        </div>
      </div>
    )}
  </>
);

const Bio = ({ bio }: { bio: string }) => (
  <div className="row d-flex justify-content-center">
    <div className="col-10">
      <h1>Bio</h1>
      <SoftDivider />
      <EditableTextField
        url={`API_HERE`}
        formKey="bio"
        placeholder="Write something about yourself..."
        minRows={3}
        initialText={bio}
      />
    </div>
  </div>
);

const KeyValueList = (props: { elements: Array<Array<string>> }) => (
  <table>
    <tbody>
      {props.elements.map(([key, value], i) => (
        <tr key={i}>
          <td>
            <span style={{ color: EDGE_BLUE, paddingRight: "30px" }}>
              {key}
            </span>
          </td>
          <td>
            <span>{value}</span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const PersonalInfo = ({
  height,
  weight,
  status,
}: {
  height: number;
  weight: number;
  status: string;
}) => {
  var elements = [];
  elements.push(["Height", height.toString()]);
  elements.push(["Weight", weight.toString()]);
  elements.push(["Seasonal Status", status]);

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-10">
        <h1>Personal Info</h1>
        <SoftDivider />
        <KeyValueList elements={elements} />
      </div>
    </div>
  );
};

const Profile = () => {
  const getPersonalInfo = (data: AthleteDataType) => (
    <PersonalInfo
      height={data.height}
      weight={data.weight}
      status={data.status}
    />
  );

  return (
    <DataSupplier<UserDataType>
      url="/api/v1/user"
      render={(data) => (
        <div className="container">
          <Spacer />
          <ProfilePicture pic={data.pic} />
          <br />
          <Title name={data.name} type={data.type} teams={data.teams} />
          <Spacer />
          <Bio bio={data.bio} />
          <Spacer />
          {getPersonalInfo(data as AthleteDataType)}
          <Spacer />
        </div>
      )}
    />
  );
};

export { Profile };
