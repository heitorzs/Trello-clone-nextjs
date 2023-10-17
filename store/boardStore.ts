import { create } from "zustand";

interface BoardState {
    board: Board;
    getBoard: () => void;
}