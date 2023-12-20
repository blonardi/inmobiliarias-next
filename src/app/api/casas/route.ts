import { NextResponse } from "next/server"

export async function GET(){
	const response = await fetch('http://localhost:3001/api/houses')
	const data = await response.json()
	//console.log(data)
	return NextResponse.json(data)
}