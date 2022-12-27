'use client'

import {AnimateSharedLayout, motion} from "framer-motion";
import {Item} from "./Item";

const items = [0, 1, 2];
const Motion = () => {


    return(
        <AnimateSharedLayout>
            <motion.ul layout initial={{ borderRadius: 25 }}>
                {items.map(item => (
                    <Item key={item} />
                ))}
            </motion.ul>
        </AnimateSharedLayout>
    );
};

export default Motion;