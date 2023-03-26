import {useEffect} from "react";
import Link from "next/link";
import axios from "axios";

export async function getServerSideProps() {
  // const userReq = await axios.get("https://api.rwnjs.com/04/users");
  return {
    props: {
      users: [
        {
          id: 1,
          username: "name",
        },
      ],
    },
  };
}

function HomePage({users}) {
  return (
    <ul>
      {users?.map(user => (
        <li key={user?.id}>
          <Link href={`/users/${user?.username}`} passHref>
            {" "}
            {user?.username}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default HomePage;
