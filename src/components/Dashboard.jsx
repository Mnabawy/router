import { Route, Link, Switch } from "react-router-dom";
import Posts from "./Posts";
import Users from "./Users";

const Dashboard = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/admin/users">users</Link>
        </li>
        <li>
          <Link to="/admin/posts">Posts</Link>
        </li>
      </ul>
      <hr />

      <Switch>
        <Route path="/admin/users">
          <Users />
        </Route>
        <Route path="/admin/posts" render={props => <Posts {...props} />} />
      </Switch>
    </div>
  );
};

export default Dashboard;
