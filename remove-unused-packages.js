const { execSync } = require("child_process");
const depcheck = require("depcheck");

// Run depcheck to find unused dependencies
depcheck(process.cwd(), {}, (unused) => {
    const unusedDependencies = unused.dependencies;

    if (unusedDependencies.length === 0) {
        console.log("✅ No unused dependencies found!");
        return;
    }

    console.log("🚀 Unused dependencies detected:", unusedDependencies);

    // Uninstall unused dependencies
    const packageManager = useYarn() ? "yarn remove" : "npm uninstall";

    try {
        console.log(`🔧 Removing unused dependencies: ${unusedDependencies.join(", ")}`);
        execSync(`${packageManager} ${unusedDependencies.join(" ")}`, { stdio: "inherit" });
        console.log("✅ Unused dependencies removed successfully!");
    } catch (error) {
        console.error("❌ Error removing dependencies:", error.message);
    }
});

function useYarn() {
    try {
        execSync("yarn --version", { stdio: "ignore" });
        return true;
    } catch {
        return false;
    }
}
