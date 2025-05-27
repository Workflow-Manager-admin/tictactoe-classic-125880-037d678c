#!/bin/bash
cd /tmp/kavia/workspace/code-generation/tictactoe-classic-125880-037d678c/tic_tac_toe
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

