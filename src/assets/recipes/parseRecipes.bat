@echo off
setlocal enabledelayedexpansion

REM Set the output JSON file name
set "outputFile=recipes.js"

REM Initialize the JSON object
echo const recipesData = { > %outputFile%

REM Loop through all .cook files
for %%f in (*.cook) do (
    REM Get the filename (recipe name)
    set "recipeName=%%~nf"

    REM Read the contents of the .cook file
    set "recipeContent="
    for /f "usebackq delims=" %%l in ("%%f") do (
        set "line=%%l"
        REM Append the line to the recipe content
        set "recipeContent=!recipeContent!%%l\n"
    )

    REM Remove trailing "\n" from the recipe content
    set "recipeContent=!recipeContent:~0,-2!"

    REM Call the subroutine to escape characters
    call :escapeCharacters recipeContent

    REM Append the recipe to the output JSON
    echo   "!recipeName!": "!recipeContent!", >> %outputFile%
)

REM Add the closing bracket to the JSON object
echo } >> %outputFile%

echo "JSON file with recipes created: %outputFile%"
exit /b

:escapeCharacters
REM Escape characters for JSON
setlocal DisableDelayedExpansion
set "content=!%~1!"
set "content=!content:^=^^!"
set "content=!content:<=^<!"
set "content=!content:>=^>!"
set "content=!content:"=\"!"
set "content=!content:%%=%%%%!"
setlocal EnableDelayedExpansion
endlocal & set "%~1=%content%"
exit /b