# Rock Paper Scissors

## Overview
The Rock Paper Scissors game is an interactive, browser-based game created by Roshan Kumar Prajapati. Built with HTML, CSS, and JavaScript, it allows players to compete against the computer by selecting Rock, Paper, or Scissors. The game features a clean interface with visual icons, real-time result display, and a restart button for replayability. It is designed for a fun and engaging experience, optimized for both desktop and mobile devices.

## Features
- **Game Interface**:
  - **Choices Section**: Three clickable options (Rock, Paper, Scissors) with corresponding icons (`rock.png`, `paper.png`, `scissors.png`).
  - **Result Display**: Shows game outcomes (e.g., "You Win!", "Computer Wins!", or "Tie!") in real-time.
  - **Restart Button**: Allows players to reset the game for a new round.
- **Gameplay Mechanics**:
  - Player selects one of three options; the computer randomly chooses one.
  - Results are determined by standard rules: Rock beats Scissors, Scissors beats Paper, Paper beats Rock.
- **Visual Design**:
  - Clean and intuitive layout with styled choice icons and result text.
  - Custom CSS for buttons, icons, and responsive design (`style.css`).
- **Footer**: Credits Roshan Kumar Prajapati with a heart emoji for a personal touch.
- **Responsive Design**: Optimized for various screen sizes using CSS media queries.

## Tech Stack
- **HTML5**: Structure of the game interface, including choices, result display, and restart button.
- **CSS3**: Styling for layout, icons, buttons, and responsiveness (`style.css`).
- **JavaScript**: Game logic, including player and computer choices, result calculation, and restart functionality (`script.js`).

## Project Structure
```
rock-paper-scissors/
├── index.html         # Main HTML file
├── style.css         # CSS styles for layout and visuals
├── script.js         # JavaScript for game logic
├── rock.png          # Icon for Rock choice
├── paper.png         # Icon for Paper choice
├── scissors.png      # Icon for Scissors choice
├── LICENSE.md        # MIT License
└── README.md         # This file
```

## Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge).
- A code editor (e.g., VS Code) for customization.
- Icon images (`rock.png`, `paper.png`, `scissors.png`) for the game choices (replace with suitable images if needed).

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/The-Roshan/rock-paper-scissors.git
cd rock-paper-scissors
```

### 2. Verify Icon Images
- Ensure `rock.png`, `paper.png`, and `scissors.png` are in the project root.
- Replace with appropriate images (PNG format) if needed, updating the `src` attributes in `index.html`.

### 3. Open the Website
- Open `index.html` in a web browser:
  ```bash
  open index.html  # macOS
  start index.html  # Windows
  ```
- Alternatively, use a local development server (e.g., VS Code Live Server) for better performance.

### 4. Customize (Optional)
- Edit `style.css` to modify colors, icon sizes, or button styles.
- Update `script.js` to enhance gameplay (e.g., add score tracking, sound effects, or animations).
- Modify `index.html` to adjust the layout or add new features.

## Usage
1. **Play the Game**: Click one of the three options (Rock, Paper, Scissors) to make your choice.
2. **View Result**: The game displays the outcome (e.g., "You Win!" or "Tie!") based on your choice and the computer’s random selection.
3. **Restart**: Click the "Restart" button to reset the game and play again.
4. **Responsive**: Access the game on mobile or desktop for a consistent experience.

## Deployment
- **Static Hosting**:
  1. Upload `index.html`, `style.css`, `script.js`, and icon images (`rock.png`, `paper.png`, `scissors.png`) to a hosting service (e.g., GitHub Pages, Netlify, Vercel).
  2. Configure the service to serve `index.html` as the entry point.
- **GitHub Pages Example**:
  1. Push the repository to GitHub.
  2. Enable GitHub Pages in the repository settings, selecting the `main` branch.
  3. Access the site at `https://the-roshan.github.io/rock-paper-scissors`.
- **Netlify Example**:
  1. Drag the project folder into Netlify’s dashboard.
  2. Deploy and use the provided URL.
- **Local Server**:
  ```bash
  python -m http.server 8000
  ```
  Visit `http://localhost:8000`.

## Notes
- **Icon Images**: Ensure `rock.png`, `paper.png`, and `scissors.png` are present to avoid broken images. Optimize images for web use to reduce load time.
- **JavaScript Logic**: The `script.js` file must implement game logic, including handling player clicks, generating computer choices, determining results, and restarting the game.
- **Styling**: The `style.css` file should define styles for the choices, result text, restart button, and responsive layout.
- **Enhancements**: Consider adding features like score tracking, animations for choices, or sound effects for a more immersive experience.
- **SEO**: Update meta tags in `<head>` (e.g., `description`, `keywords`) for better visibility.
- **License**: Include the MIT License in `LICENSE.md` to clarify usage terms (as provided previously).

## License
This project is licensed under the MIT License. See `LICENSE.md` for details.

## Contributing
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit changes: `git commit -m "Add your feature"`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

## Acknowledgments
- Built with HTML, CSS, and JavaScript for a fun and interactive game.
- Inspired by the classic Rock Paper Scissors game with a modern web interface.
- Created by Roshan Kumar Prajapati.

## Contact
For questions or feedback, contact Roshan Kumar Prajapati:
- Email: roshanjsr5555@gmail.com
- Phone: +91 7061126213
- GitHub: [The-Roshan](https://github.com/The-Roshan)
