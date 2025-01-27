import './ShoppingList.css';
import { plantList } from '../../datas/plantList';
import CareScale from '../CareScale/CareScale';

function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	);

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<li key={plant.id} className='lmj-plant-item'>
						<div>
							<strong>{plant.name}</strong>
						</div>
						<div>Catégorie : {plant.category}</div>
						<div>
							Lumière : <CareScale scaleValue={plant.light} careType="light" />
						</div>
						<div>
							Arrosage : <CareScale scaleValue={plant.water} careType="water" />
						</div>
						{plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
					</li>
				))}
			</ul>
		</div>
	);
}

export default ShoppingList;
