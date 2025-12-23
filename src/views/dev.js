import { useEffect, useState } from "react";
import axios from "axios";
// node.js library that concatenates classes (strings)
import {
	Card,
  Container,
	CardHeader
} from "reactstrap";
import Header from "components/Headers/Header.js";

const Dev = (props) => {

  const [tests, setTests] = useState([]);

	useEffect(() => {
		axios.get(`${process.env.REACT_APP_API_URL}/api/tests`)
				.then(res => {
						setTests(res.data);
				})
}, [])

  return (
    <>
      <Header />
      {/* Page content */}
			<Container className="mt--7" fluid>
				<Card>
					<CardHeader className="border-1">
						<h1>Hi</h1>
						{tests.map((data) => (
							<h3 key={data.test_seq_no}>{data.test_nm}</h3>
						))}
					</CardHeader>
				</Card>
			</Container>
    </>
  );
};

export default Dev;
