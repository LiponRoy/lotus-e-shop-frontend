import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './UpcomingProduct.css';
import img1 from '../../components/assets/slide/cat1.jpg';
import img2 from '../../components/assets/slide/cat2.jpg';
import img3 from '../../components/assets/slide/cat3.jpg';
import img4 from '../../components/assets/slide/cat4.jpg';
import img5 from '../../components/assets/slide/cat5.jpg';
import img6 from '../../components/assets/slide/cat6.jpg';

const UpcomingProduct = () => {
	const sliderItems = [
		{
			price: 'Coming soon...',
			img: img1,
		},
		{
			price: 'Coming soon...',
			img: img2,
		},
		{
			price: 'Coming soon...',
			img: img3,
		},
		{
			price: 'Coming soon...',
			img: img4,
		},
		{
			price: 'Coming soon...',
			img: img5,
		},
		{
			price: 'Coming soon...',
			img: img6,
		},
	];

	let settings_3 = {
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
		//koyta kore show korbe
		slidesToShow:5,
		//arrow press korle koyta kore asbe
		slidesToScroll: 2,
		// vertical:true,
		// verticalSwiping={true}
		pauseOnHover: false,
		//fade={true}
		touchMove: true,

		initialSlide: 0,
		infinite: true,
		// centerPadding: '170px',
		centerMode: false,

		responsive: [
			{
				breakpoint: 426,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: false,
					// infinite: true,
					// dots: true,
				},
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					centerMode: false,
					// infinite: true,
					// dots: true,
				},
			},
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					centerMode: false,
					// infinite: true,
					// dots: true,
				},
			},
		],
	};

	return (
		<>
			<div className='multiSliderHere my-10 hidden md:block mx-52 mr-12'>
				<div className=' flex items-center justify-center pb-8'>
					<span className=' text-2xl font-bold'>UPCOMING PRODUCT'S</span>
				</div>

				<Slider {...settings_3}>
					{sliderItems.map((item, index) => (
						<div key={index} className='cardMeHere'>
							<div className='iteamsHere text-start'>
								<img className=' hover:scale-100 transition duration-300 ease-in-out' src={item.img} alt='no img found' width='300' />
								<h5 className=' my-4 mt-6'>Price : {`${item.price}`} </h5>
								{/* <h6>{daa.desc}</h6> */}
							</div>
						</div>
					))}
				</Slider>
			</div>
		</>
	);
};

export default UpcomingProduct;
