import { ThemeOptions } from "@mui/material/styles"
import React from "react"

declare module "@mui/material/style" {
    interface ThemeOptions {
        status: {
            danger: React.CSSProperties["color"]
        }
    }
}