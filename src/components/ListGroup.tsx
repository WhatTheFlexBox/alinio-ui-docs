import { useState } from "react";

interface Props {
	listGroupItems: string[];
	heading: string[];
	onSelectItem: (item: string) => void;
}

function ListGroup({ listGroupItems, heading, onSelectItem }: Props) {
	const [selectedIndex, setSelectedIndex] = useState(-1);

	return (
		<>
			<h1>{heading}</h1>

			{listGroupItems.length === 0 && <p>No items to display</p>}

			<div>
				<ul className="list-group">
					{listGroupItems.map((item, index) => (
						<li
							className={
								selectedIndex === index
									? "list-group-item active"
									: "list-group-item"
							}
							key={item}
							onClick={() => {
								setSelectedIndex(index);
								onSelectItem(item);
							}}
						>
							{item}
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default ListGroup;
