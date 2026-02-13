// 1. Imports (grouped logically)
import React, { useState, useEffect, useCallback, useMemo } from "react";
// import PropTypes from "prop-types";
// import { useCustomHook } from "@/hooks";
// import { ComponentA, ComponentB } from "@/components";
import styles from "./MyComponent.module.css";
import { Loader2 } from "lucide-react";

// 2. Types/Interfaces (if using TypeScript)
interface MyComponentProps {
  userId: string;
  onUpdate?: (data: UserData) => void;
}

interface UserData {
  name: string;
  email: string;
}
// 3. Component definition
const MyComponent: React.FC<MyComponentProps> = ({ userId, onUpdate }) => {
  // 4. State declarations
  const [data, setData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(false);

  // 5. Hooks (custom hooks, context, etc.)

  // 6. Computed values/memoization
  const processedData = useMemo(() => {
    return data || null;
  }, [data]);

  // 7. Callbacks/Event handlers
  const handleUpdate = useCallback(
    (newData: UserData) => {
      setData(newData);
      onUpdate?.(newData);
    },
    [onUpdate],
  );

  // 8. Effects
  useEffect(() => {
    // fetchData();
  }, [userId]);

  // 9. Helper functions (specific to component)
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const result = await apiService.getUser(userId);
  //       setData(result);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  // 10. Early returns/conditional rendering
  if (loading) return <Loader2 />;
  if (!data) return null;

  // 11. Main render
  return (
    <div className={styles.container}>
      <ComponentA data={processedData} />
      <ComponentB onUpdate={handleUpdate} />
    </div>
  );
};

// 12. PropTypes (if not using TypeScript)
MyComponent.propTypes = {
  userId: PropTypes.string.isRequired,
  onUpdate: PropTypes.func,
};

// 13. Default export
export default MyComponent;
