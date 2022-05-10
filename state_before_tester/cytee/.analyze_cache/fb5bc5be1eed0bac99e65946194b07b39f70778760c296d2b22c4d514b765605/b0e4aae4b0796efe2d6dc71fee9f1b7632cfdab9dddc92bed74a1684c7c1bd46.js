import {useContext, useEffect, useState} from "react";
import {shoppingCartContext} from "../../../App";

import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

import {sortByProperty} from "../../../util/objectArrayHandling";
import {calculateTotalPriceOfCart} from "../../../util/shoppingCartListHandling";

const ShoppingCartMiniDisplay = () => {
    const [shoppingCartState, shoppingCartReducer] = useContext(shoppingCartContext);
    const [lastThreeItemsState, setLastThreeItemsState] = useState([]);
    const [totalPriceState, setTotalPriceState] = useState(0);

    useEffect(() => {
        if (shoppingCartState.items.length > 0) {
            const sortedShoppingCartItems = sortByProperty(shoppingCartState.items, "lastChanged");
            sortedShoppingCartItems.reverse();
            setLastThreeItemsState(sortedShoppingCartItems.slice(0,3));
            setTotalPriceState(calculateTotalPriceOfCart(shoppingCartState.items));
        }
    },[shoppingCartState]);

    return (
        <ListGroup as="ol">
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                Last 3 items
            </ListGroup.Item>
            {(shoppingCartState.items.length === 0 && (
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                    Nothing in list..
                </ListGroup.Item>
            )) || (lastThreeItemsState.map(currentItem => (
                <ListGroup.Item
                    key={"ShoppingCartMiniDisplay-" + currentItem.name}
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{currentItem.name}</div>
                        <p>{currentItem.price} SEK</p>
                        <p>Total: {currentItem.price * currentItem.amount} SEK</p>
                        <Button
                            variant="warning"
                            size="sm"
                            onClick={() => {
                                shoppingCartReducer({
                                    type: 'deleteItem',
                                    payload: currentItem
                                });
                        }}
                        >Remove</Button>
                    </div>
                    <Badge bg="primary" pill>
                        {currentItem.amount}
                    </Badge>
                </ListGroup.Item>
            )))}
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                Total: {totalPriceState} SEK
            </ListGroup.Item>
        </ListGroup>
    );
};

export default ShoppingCartMiniDisplay