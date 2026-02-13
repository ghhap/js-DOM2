import { initializeEvents } from './modules/events.js';

const gallery = document.getElementById("gallery");
const loadMoreBtn = document.getElementById("loadMore");
const clearBtn = document.getElementById("clear");
const removeLastBtn = document.getElementById("removeLast");
const reverseBtn = document.getElementById("reverse");

initializeEvents(
  gallery,
  loadMoreBtn,
  clearBtn,
  removeLastBtn,
  reverseBtn
);
