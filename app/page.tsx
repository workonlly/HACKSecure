"use client";
import { Toaster } from "react-hot-toast";
import MainContent from "./components/MainContent";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-white ">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="">
            <MainContent />
          </main>
        </div>
      </div>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#ffffff",
            color: "#333333",
            border: "1px solid #ddd",
          },
        }}
      />
    </>
  );
}
