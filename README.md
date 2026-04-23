# 🏙️ UrbanFlow: Smart City Governance & Community Pulse

**UrbanFlow** is a next-generation smart city ecosystem designed to bridge the gap between residents and city authorities. Built for high-efficiency governance and vibrant community engagement, UrbanFlow transforms civic management into a seamless, transparent, and interactive experience.

![UrbanFlow Banner](https://tripcosmos.co/wp-content/uploads/2024/08/Kumbh-mela-prayagraj.jpg)

## 🚀 Key Modules

### 📡 UrbanPulse (UVoice)
A real-time "City Pulse" communication engine inspired by modern social platforms. It serves as the digital town square for Prayagraj.
- **URL-Driven Navigation**: Deep-linkable views for Home, Explore, Notifications, and Profiles.
- **Smart Feeds**: Switch between "For You" (city-wide updates) and "Following" (curated community signals).
- **Official Broadcasts**: Priority routing for verified Authority and Admin notices to ensure critical information reaches every resident.
- **Interactive Signals**: Support for #hashtags, @mentions, rich media, and real-time community engagement (reposts, likes, bookmarks).

### 🛠️ Civic Engine
A robust system for reporting and tracking urban infrastructure issues.
- **Smart Reporting**: Geo-tagged issue reporting for potholes, streetlights, and sanitation.
- **Real-time Status**: Live tracking of resolution progress from "Reported" to "Resolved".
- **Authority Dashboard**: Specialized interfaces for city officials to manage workflows and allocate resources.

### 👥 Resident & Authority Portals
Tailored experiences for different city roles:
- **Admin/Authority**: Advanced analytics, insights, and official broadcast tools.
- **Resident**: Personalized dashboard, bookmarked signals, and verified status management.
- **Citizen**: Entry-level community participation tools.

## 🛠️ Technology Stack

- **Core**: [React.js](https://reactjs.org/) + [Vite](https://vitejs.dev/) for ultra-fast development and performance.
- **Language**: [TypeScript](https://www.typescriptlang.org/) for robust, type-safe development.
- **Styling**: Premium [Vanilla CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) + [TailwindCSS](https://tailwindcss.com/) for a sleek, modern aesthetic.
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for fluid, professional micro-interactions.
- **Icons**: [Lucide React](https://lucide.dev/) for a consistent, high-fidelity icon system.
- **State & Routing**: [React Router Dom](https://reactrouter.com/) for URL-synchronized application state.

## 🏁 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.0 or higher)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/UrbanFlow.git
   cd UrbanFlow
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Launch Development Server**:
   ```bash
   npm run dev
   ```

## 📂 Project Structure

```text
src/
├── components/        # Reusable UI modules (UrbanPulse, Civic Dashboard, etc.)
├── context/           # Application-wide state (Auth, Notifications)
├── services/          # API integration (urbanAPI, streetGigAPI)
├── lib/               # Utility functions and shared helpers
├── App.tsx            # Main routing and portal architecture
└── main.tsx           # Entry point
```

## 🌟 Recent Enhancements

- **UVoice Overhaul**: Complete transformation into a high-fidelity social feed with tabbed sub-navigation.
- **Smart Sidebar**: Real-time "What's happening" and "Who to follow" sections.
- **Verified Status**: Implementation of verified phone number badges and role-based badging.
- **Deep-Linking**: Full synchronization between application view-state and the browser URL.

---

<div align="center">
Built with ❤️ for the future of <b>Prayagraj</b>
</div>
