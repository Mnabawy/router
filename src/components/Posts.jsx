const queryString = require("query-string");

const Posts = ({ match, location }) => {
  const parsed = queryString.parse(location.search);
  console.log(parsed);

  return (
    <div>
      Posts Details <div>Month: {match.params.month}</div>
      <div>
        Posts Details <div>year: {match.params.year}</div>
      </div>
    </div>
  );
};

export default Posts;
