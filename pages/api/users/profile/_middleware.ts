import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

import jwt from "jsonwebtoken";
export function middleware(req: NextRequest, ev: NextFetchEvent) {
    try {
        let response = NextResponse.next()
        let token = req['headers'].get('authorization')
        if (
          typeof token != "undefined" &&
          token != null
        ) {
          const barerheader = token;
          const baerer = barerheader.split(" ");
          token = baerer[1];
        }
        if (token) {
          jwt.verify(token, 'efiletoday-key', function (err, decoded) {
            if (err) {
              throw new Error("Authentication failed");
            } else {
                return response
            }
          });
        } else {
          throw new Error("Authentication token required");
        }
      } catch (error) {
        
      }
}