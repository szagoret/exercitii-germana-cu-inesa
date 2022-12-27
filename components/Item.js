'use client'

import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

function Content() {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="row" />
            <div className="row" />
            <div className="row" />
        </motion.div>
    );
}

export const Item = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
            <motion.div className="avatar" layout />
            <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
        </motion.li>
    );
};