@echo off
setlocal enabledelayedexpansion

REM Set the output JSON file name
set "outputFile=recipes.json"

REM Initialize the JSON object
echo const recipes = { > %outputFile%

REM Loop through all .cook files
for %%f in (*.cook) do (
    REM Get the filename (recipe name)
    set "recipeName=%%~nf"

    REM Read the contents of the .cook file
    set "recipeContent="
    for /f "usebackq delims=" %%l in ("%%f") do (
        set "line=%%l"
        REM Remove leading and trailing whitespace from each line
        set "line=!line:~1,-1!"
        REM Escape double quotes
        set "line=!line:"=\"!"
        REM Append the line to the recipe content
        set "recipeContent=!recipeContent!!line!\n"
    )

    REM Remove trailing "\n" from the recipe content
    set "recipeContent=!recipeContent:~0,-2!"

    REM Append the recipe to the output JSON
    echo   "!recipeName!": "!recipeContent!", >> %outputFile%
)

REM Add the closing bracket to the JSON object
echo } >> %outputFile%

echo "JSON file with recipes created: %outputFile%"
