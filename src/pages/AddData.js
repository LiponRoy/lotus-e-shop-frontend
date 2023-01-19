import { useState, useEffect } from 'react';
import { Input, Row, Col, Button, Card, message } from 'antd';
import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { useParams } from 'react-router-dom';
// import { useCreateTaskMutation } from '../features/phoneApi';
import { useTestInsertMutation } from '../features/testApi';

const initialState = {
	title: '',
	otherText: '',
	mobile_no: '',
};
const AddData = () => {
	const navigate = useNavigate();
	const [testInsert, { isLoading, isSuccess }] = useTestInsertMutation();

	const [data, setData] = useState({
		title: '',
		otherText: '',
		mobile_no: '',
	});

	useEffect(() => {}, []);

	const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
	const handleSubmit = async (e) => {
		e.preventDefault();
		await testInsert(data);

		// after submit data
		setData({
			title: '',
			otherText: '',
			mobile_no: '',
		});

		navigate('/');
	};

	return (
		<div>
			<div className=' h-[90vh] flex flex-col justify-center items-center'>
				<form onSubmit={handleSubmit}>
					<Card title='Create a new student'>
						<Row gutter={[0, 20]}>
							<Col span={24}>
								<Input size='large' placeholder='Enter Title' name='title' value={data.title} onChange={handleChange} disabled={isLoading} />
							</Col>
							<Col span={24}>
								<Input size='large' placeholder='Enter  otherText' name='otherText' value={data.otherText} onChange={handleChange} disabled={isLoading} />
							</Col>
							<Col span={24}>
								<Input size='large' placeholder='Enter   Mobile_no' name='mobile_no' value={data.mobile_no} onChange={handleChange} disabled={isLoading} />
							</Col>
							<Col span={24}>
								<Button loading={isLoading} htmlType='submit' type='primary'>
									Add Student
								</Button>
							</Col>
						</Row>
					</Card>
				</form>
			</div>
		</div>
	);
};

export default AddData;
