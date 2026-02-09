/** Logical Operator with Conditional Statements */

const physics = 90;
const chemistry = 88;
const maths = 95;
const biology = 96;

// AND Logical Operator //
if(physics > 85 && maths > 85 && chemistry > 85)
{
    console.log("You are eligible for Engg..");
}
else
{
    console.log("You are not eligible for IIt..");
}

// OR Logical Operator //
if(physics > 90 || maths > 85 || chemistry > 89)
    {
        console.log("You are eligible for Engg..");
    }
    else
    {
        console.log("You are not eligible for IIt..");
    }

// NOT Operator //
const isstudentEligible = false;
if(!isstudentEligible)
{
    console.log("You are eligible");
}
else
{
    console.log("You are not eligible");
}